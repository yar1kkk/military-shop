package service

import (
	"context"
	"strings"
	"errors"

	"github.com/yar1kkk/military-shop/model"
	"github.com/yar1kkk/military-shop/util"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo"
)

type UserServiceImpl struct {
	collection *mongo.Collection
	ctx        context.Context
}

func NewUserServiceImpl(collection *mongo.Collection, ctx context.Context) UserService {
	return &UserServiceImpl{collection, ctx}
}

func (us *UserServiceImpl) FindUserById(id string) (*model.DBResponse, error) {
	oid, _ := primitive.ObjectIDFromHex(id)

	var user *model.DBResponse

	query := bson.M{"_id": oid}
	err := us.collection.FindOne(us.ctx, query).Decode(&user)

	if err != nil {
		if err == mongo.ErrNoDocuments {
			return &model.DBResponse{}, err
		}
		return nil, err
	}

	return user, nil
}

func (us *UserServiceImpl) FindUserByEmail(email string) (*model.DBResponse, error) {
	var user *model.DBResponse

	query := bson.M{"email": strings.ToLower(email)}
	err := us.collection.FindOne(us.ctx, query).Decode(&user)

	if err != nil {
		if err == mongo.ErrNoDocuments {
			return &model.DBResponse{}, err
		}
		return nil, err
	}

	return user, nil
}

func (uc *UserServiceImpl) UpsertUser(email string, data *model.UpdateDBUser) (*model.DBResponse, error) {
	doc, err := util.DocHelp(data)
	if err != nil {
		return nil, err
	}

	opts := options.FindOneAndUpdate().SetUpsert(true).SetReturnDocument(1)
	query := bson.D{{Key: "email", Value: email}}
	update := bson.D{{Key: "$set", Value: doc}}
	res := uc.collection.FindOneAndUpdate(uc.ctx, query, update, opts)

	var updatedPost *model.DBResponse

	if err := res.Decode(&updatedPost); err != nil {
		return nil, errors.New("no post with that Id exists")
	}

	return updatedPost, nil
}

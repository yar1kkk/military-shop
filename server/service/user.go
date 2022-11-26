package service

import "github.com/yar1kkk/military-shop/model"

type UserService interface {
	FindUserById(string) (*model.DBResponse, error)
	FindUserByEmail(string) (*model.DBResponse, error)
	UpsertUser(string, *model.UpdateDBUser) (*model.DBResponse, error)
}


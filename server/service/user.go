package service

import "github.com/yar1kkk/military-shop/model"

type UserService interface {
	FindUserById(string) (*models.DBResponse, error)
	FindUserByEmail(string) (*models.DBResponse, error)
}


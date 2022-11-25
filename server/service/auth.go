package service

import "github.com/yar1kkk/military-shop/model"

type AuthService interface {
	SignUpUser(*model.SignUpInput) (*model.DBResponse, error)
	SignInUser(*model.SignInInput) (*model.DBResponse, error)
}

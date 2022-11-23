package service

import "github.com/yar1kkk/military-shop/model"

type AuthService interface {
	SignUpUser(*models.SignUpInput) (*models.DBResponse, error)
	SignInUser(*models.SignInInput) (*models.DBResponse, error)
}

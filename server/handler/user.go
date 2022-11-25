package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/yar1kkk/military-shop/model"
	"github.com/yar1kkk/military-shop/service"
)

type UserController struct {
	userService service.UserService
}

func NewUserController(userService service.UserService) UserController {
	return UserController{userService}
}

func (uc *UserController) GetMe(ctx *gin.Context) {
	currentUser := ctx.MustGet("currentUser").(*model.DBResponse)

	ctx.JSON(http.StatusOK, gin.H{"status": "success", "data": gin.H{"user": model.FilteredResponse(currentUser)}})
}

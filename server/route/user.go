package route

import (
	"github.com/gin-gonic/gin"
	"github.com/yar1kkk/military-shop/handler"
	"github.com/yar1kkk/military-shop/middleware"
	"github.com/yar1kkk/military-shop/service"
)

type UserRouteController struct {
	userController handler.UserController
}

func NewRouteUserController(userController handler.UserController) UserRouteController {
	return UserRouteController{userController}
}

func (uc *UserRouteController) UserRoute(rg *gin.RouterGroup, userService service.UserService) {

	router := rg.Group("user")
	router.Use(middleware.DeserializeUser(userService))
	router.GET("/current", uc.userController.GetMe)
}




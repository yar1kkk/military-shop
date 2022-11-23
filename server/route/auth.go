package route

import (
	"github.com/gin-gonic/gin"
	"github.com/yar1kkk/military-shop/handler"
	"github.com/yar1kkk/military-shop/middleware"
	"github.com/yar1kkk/military-shop/service"
)

type AuthRouteController struct {
	authController handler.AuthController
}

func NewAuthRouteController(authController handler.AuthController) AuthRouteController {
	return AuthRouteController{authController}
}

func (rc *AuthRouteController) AuthRoute(rg *gin.RouterGroup, userService services.UserService) {
	router := rg.Group("/auth")

	router.POST("/register", rc.authController.SignUpUser)
	router.POST("/login", rc.authController.SignInUser)
	router.GET("/refresh", rc.authController.RefreshAccessToken)
	router.GET("/logout", middleware.DeserializeUser(userService), rc.authController.LogoutUser)
}

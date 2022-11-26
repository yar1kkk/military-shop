package route

import (
	"github.com/gin-gonic/gin"
	"github.com/yar1kkk/military-shop/handler"
)


type SessionRouteController struct {
	authController handler.AuthController
}

func NewSessionRouteController(authController handler.AuthController) SessionRouteController {
	return SessionRouteController{authController}
}

func (rc *SessionRouteController) SessionRoute(rg *gin.RouterGroup) {
	router := rg.Group("/sessions/oauth")

	router.GET("/google", rc.authController.GoogleOAuth)
}

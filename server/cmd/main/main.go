package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func TestHandler(ctx *gin.Context) {
	name := ctx.Params.ByName("name")
	ctx.String(http.StatusOK, "Hello, %s", name)
}

func main() {
	router := gin.Default()
	router.GET("/:name", TestHandler)
	router.Run(":8080")
}

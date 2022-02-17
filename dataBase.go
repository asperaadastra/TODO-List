package main

import (
	// "fmt"
	// "io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
	// "errors"
)

type todo struct {
	Task string `json:"task"`
	ID   int    `json:"id"`
}

var todos = []todo{
	{ID: 1, Task: "finish todo list"},
}

func getTodos(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, todos)
}

func addTodo(c *gin.Context) {
	// var newTodo todo

	// newTodo, err := ioutil.ReadFile("./newTodo.json")
	// if err != nil {
	// 	fmt.Print(err)
	// }

	// if err := c.BindJSON(&newTodo); err != nil {
	// 	return
	// }
	// todos = append(todos, newTodo)
	// c.IndentedJSON(http.StatusCreated, newTodo)

}

func main() {
	router := gin.Default()
	router.POST("/todos", addTodo)
	router.GET("/todos", getTodos)
	router.Run("localhost:8080")
}

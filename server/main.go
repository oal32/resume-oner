package main

import (
	"log"
	"net/http"
)

func LoggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ipAddress := r.Header.Get("X-Forwarded-For")

		if ipAddress == "" {
			ipAddress = r.RemoteAddr
		}
		log.Printf("Request: %s %s. From address %s", r.Method, r.URL.Path, ipAddress)
		next.ServeHTTP(w, r)
	})
}
func main() {

	fs := http.FileServer(http.Dir("../resume-client/dist"))
	http.Handle("/", LoggingMiddleware(fs))

	log.Println("Listening on :8080...")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}

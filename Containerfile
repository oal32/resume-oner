FROM golang:1.25 AS build
WORKDIR /server
COPY server/go.mod /server/
COPY server/main.go /server/
RUN CGO_ENABLED=0 go build -o /bin/server ./main.go

FROM node:24 as kinda_build
WORKDIR /resume-client
COPY /resume-client /resume-client/
RUN npm install
RUN npm run build


FROM scratch
COPY --from=build /bin/server /bin/server
COPY --from=kinda_build /resume-client/dist /resume-client/dist
CMD ["/bin/server"]
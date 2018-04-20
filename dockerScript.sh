# docker run -it --link mongonode:mongo --rm mongo sh -c 'exec mongo "$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT/test"'
docker cp todos.js mongonode:/data
docker exec mongonode bash -c 'mongo < /data/todos.js'
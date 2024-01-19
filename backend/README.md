## Setting up
### Make sure python 3.8 is installed

### Create .env file in `backend` directory (see `env.example`)

```shell
cd backend
pip install poetry==1.1.11
poetry install
```

# Running project locally
```shell
cd backend
poetry run python main.py
```

# Documentation 

http://localhost:8001/docs

## docker 

docker build --rm -t gho-backend:latest .

--env-file .env

docker run --rm  -p 9995:9995 --name gho-backend gho-backend:latest 


https://youtu.be/J1idJIsu08o
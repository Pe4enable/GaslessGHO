from typing import Union
import environs
import unittest
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

env = environs.Env()
app = FastAPI()

origins = ["https://gho.donft.io"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Execute(BaseModel):
    forwarder: dict
    permit: dict
    forwarderSignature: str
    isPermit: bool
    native: bool


@app.post("/")
async def send_transaction(execute: Execute):

    return "null"
           

@app.get("/get_refund/{receiver}/{password}/")
async def transfer_token(
    receiver: str,
    password: str,
    chainId: str
):
    if password == 'MetaPipe':
        return 'null'
    else:
        return 'Ticket to long sexual journey'

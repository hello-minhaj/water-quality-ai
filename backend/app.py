from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import pickle

# Load trained model
with open("water_quality.pkl", "rb") as file:
    model = pickle.load(file)

app = FastAPI(title="Water Quality Prediction API")

# Allow frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # We'll restrict this later after deployment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class WaterQualityInput(BaseModel):
    ph: float
    Hardness: float
    Solids: float
    Chloramines: float
    Sulfate: float
    Conductivity: float
    Organic_carbon: float
    Trihalomethanes: float
    Turbidity: float


@app.get("/")
def home():
    return {
        "message": "Water Quality Prediction API is running."
    }


@app.post("/predict")
def predict(data: WaterQualityInput):

    input_df = pd.DataFrame([[
        data.ph,
        data.Hardness,
        data.Solids,
        data.Chloramines,
        data.Sulfate,
        data.Conductivity,
        data.Organic_carbon,
        data.Trihalomethanes,
        data.Turbidity
    ]], columns=[
        "ph",
        "Hardness",
        "Solids",
        "Chloramines",
        "Sulfate",
        "Conductivity",
        "Organic_carbon",
        "Trihalomethanes",
        "Turbidity"
    ])

    prediction = model.predict(input_df)[0]

    result = "Drinkable" if prediction == 1 else "Not Drinkable"

    return {
        "prediction": result
    }
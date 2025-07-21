from fastapi import FastAPI

app = FastAPI()
@app.get("/")
def read_root():
    return {"message": "Welcome to GramPragati API"}

@app.get("/village/info")
def get_village_info():
    return {
        "name": "Sample Gram Panchayat",
        "state": "Maharashtra",
        "population": 2345,
        "watersources": ["Well", "Pond", "River"],
        "agriculture": ["Wheat", "Rice", "Pulses"]
    }

from flask import Flask, jsonify

app = Flask(__name__)

# Sample commercials data
commercials = [
    {"name": "Commercial 1", "amount_of_donations": 0, "maximum_amount_raised": 5000, "current_amount_raised": 2000},
]

@app.route('/api/commercials')
def get_commercials():
    return jsonify(commercials)

@app.route('/')
def hello():
    return "hello from backend"

if __name__ == '__main__':
    app.run(debug=True)

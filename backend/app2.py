from flask import Flask, request, jsonify, session
import random

app = Flask(__name__)

app.config['SECRET_KEY'] = 'monsupersecret'

@app.route('/start', methods=['GET'])
def start_game():
    nombre = random.randint(1, 100)
    session['nombre'] = nombre
    session['tentatives'] = 3
    session['tentative'] = 0
    return jsonify({'message': 'Game started', 'tentatives': session['tentatives']})

@app.route('/guess', methods=['POST'])
def guess():
    data = request.get_json()
    proposition = data['proposition']
    session['tentative'] += 1

    if proposition < session['nombre']:
        message = 'Le nombre est plus grand'
    elif proposition > session['nombre']:
        message = 'Le nombre est plus petit'
    else:
        message = f'Bravo ! Vous avez trouvé le nombre en {session["tentative"]} tentatives'
        session.pop('nombre', None)
        session.pop('tentatives', None)
        session.pop('tentative', None)
        return jsonify({'message': message, 'success': True})

    if session['tentative'] >= session['tentatives']:
        message = f'Désolé, vous avez épuisé vos tentatives. Le nombre était {session["nombre"]}'
        session.pop('nombre', None)
        session.pop('tentatives', None)
        session.pop('tentative', None)
        return jsonify({'message': message, 'success': False})

    return jsonify({'message': message, 'tentatives_restantes': session['tentatives'] - session['tentative']})

if __name__ == '__main__':
    app.run(host='192.168.1.42', port=5000, debug=True)
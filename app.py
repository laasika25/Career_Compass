from flask import Flask, render_template, request, redirect, url_for, session, flash
import os
import json

app = Flask(__name__)

# Secret key for session management
app.secret_key = os.urandom(24)

# Route for login page
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Get username and password from the form
        username = request.form['username']
        password = request.form['password']

        # Check if user exists in localStorage (simulated with a JSON file)
        user_data_path = f'users/{username}.json'

        if os.path.exists(user_data_path):
            # Load user data from JSON file
            with open(user_data_path, 'r') as file:
                user_data = json.load(file)
            
            # Check if password matches
            if user_data['password'] == password:
                session['username'] = username
                return redirect(url_for('dashboard'))
            else:
                flash('Incorrect password. Please try again.')
        else:
            flash('User not found. Please sign up first.')
            return redirect(url_for('signup'))

    return render_template('login.html')

# Route for signup page
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Check if user already exists
        user_data_path = f'users/{username}.json'
        if os.path.exists(user_data_path):
            flash('Username already exists. Please choose another one.')
        else:
            # Save user data to JSON file
            user_data = {'username': username, 'password': password}
            os.makedirs('users', exist_ok=True)
            with open(user_data_path, 'w') as file:
                json.dump(user_data, file)

            flash('Account created successfully! You can now log in.')
            return redirect(url_for('login'))
    
    return render_template('signup.html')

# Route for dashboard page
@app.route('/dashboard')
def dashboard():
    if 'username' not in session:
        return redirect(url_for('login'))  # Redirect to login if not logged in

    username = session['username']
    return render_template('dashboard.html', username=username)

# Route for logout
@app.route('/logout')
def logout():
    session.pop('username', None)  # Remove user session
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)

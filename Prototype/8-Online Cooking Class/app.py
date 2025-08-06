from flask import Flask, render_template, redirect, url_for, flash, request, session
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from forms import RegistrationForm, LoginForm
from models import User
from extensions import db, login_manager, bcrypt

# --- App & Config ---
app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# --- Extensions Init ---
db.init_app(app)
login_manager.init_app(app)
bcrypt.init_app(app)

# --- User Loader ---
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

login_manager.login_view = 'login'
login_manager.login_message_category = 'info'

# --- Routes ---

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/courses')
def courses():
    return render_template('courses.html')

@app.route('/programs')
def programs():
    return render_template('programs.html')

@app.route('/bakery')
def bakery():
    return render_template('bakery.html')

@app.route('/enroll', methods=['GET', 'POST'])
def enroll():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        mobile = request.form.get('mobile')
        gst = request.form.get('gst')
        coupon = request.form.get('coupon')
        upi = request.form.get('upi')
        card = request.form.get('card')

        # Simulate enrollment processing
        print("New Enrollment:", name, email, mobile, gst, coupon, upi, card)

        return redirect(url_for('enroll_success'))
    return render_template('enroll.html')

@app.route('/enroll/success')
def enroll_success():
    return render_template('success.html')

@app.route("/cloudkitchen")
def cloudkitchen():
    return render_template("cloudkitchen.html")
@app.route('/popcourse')
def popcourse():
    return render_template('popcourse.html') 


@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/learnmore")
def learnmore():
    return render_template("learnmore.html")

@app.route("/submit_ticket", methods=["POST"])
def submit_ticket():
    email = request.form["email"]
    subject = request.form["subject"]
    description = request.form["description"]
    # You could save to DB or send email here
    return "Ticket Submitted Successfully!"

# @app.route("/chat")
# def chat():
#     return "Chat feature is under development."

@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_pw = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, password=hashed_pw)
        db.session.add(user)
        db.session.commit()
        flash('Account created successfully. Please log in.', 'success')
        return redirect(url_for('login'))
    return render_template('register.html', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user)
            flash('Login successful!', 'success')
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('home'))
        else:
            flash('Invalid username or password', 'danger')
    return render_template('login.html', form=form)

@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('Logged out successfully.', 'info')
    return redirect(url_for('home'))


# --- App Entry ---
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

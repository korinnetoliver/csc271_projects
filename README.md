# csc271_projects

# A/B Tests
 
---
 
## Test 1: Signup Form Length: Minimal vs Detailed
**User Story:** US1 — Account Creation
 
**Metrics:**
- Adoption – percentage of users who successfully create an account
- Task Success – signup completion rate
- Happiness – user satisfaction via NPS after onboarding
 
**Hypothesis:**
If the signup process only asks for email and password, users will complete account creation more often than if asked for additional profile information during signup.
 
**Experiment:**
Users will be randomly assigned via Firebase Remote Config — 50% control, 50% experiment. The main metric is signup conversion rate: `sign_up_success / sign_up_attempt`. Test runs until statistically significant results are observed.
 
Firebase events tracked: `sign_up_attempt`, `sign_up_success`, `sign_up_failure`, `login_success`
 
**Variations:**
- Variation A (Control) – Minimal form: Email, Password, Create Account. Profile details collected later during onboarding.
- Variation B (Experiment) – Extended form: Email, Password, Age Range, Financial Experience Level, Create Account.
 
---
 
## Test 2: Error Messages: Inline vs Banner
**User Story:** US2 — User Login
 
**Metrics:**
- Task Success – successful login rate
- Engagement – users reaching the dashboard
- Happiness – reduced failed login attempts
 
**Hypothesis:**
Displaying inline error messages under input fields will improve login success compared to a banner error at the top, because users can more easily identify which field caused the problem.
 
**Problem:**
Users may fail to log in because error messages are unclear or not tied to the correct field, causing confusion and login abandonment.
 
**Experiment:**
Users will be randomly split via Firebase A/B Testing — 50% control, 50% experiment.
 
Firebase events tracked: `login_attempt`, `login_success`, `login_failure`, `dashboard_view`
 
**Variations:**
- Variation A (Control) – Banner error message displayed at the top of the screen.
- Variation B (Experiment) – Inline error message displayed directly under the field that caused the error.
 
---
 
## Test 3: Sign Up / Login: One Screen or Two
**Contributor:** Mustaan
**User Story:** US1
 
**Metrics:**
- Number of users who sign up or log in from a single combined screen
- Number of users who sign up or log in from two separate screens
 
**Hypothesis:**
Users would prefer to have both signing up and logging in on one screen rather than navigating between two separate screens.
 
**Experiment:**
A true/false toggle will present both methods. New user registration counts will be tracked in Firebase to determine which method performs better.
 
**Variations:**
- Variation A (Control) – Two separate screens: one for sign-up, one for login.
- Variation B (Experiment) – One combined screen handling both sign-up and login.
 
---
 
## Test 4: Profile Onboarding: Guided Setup or Quick Start
**Contributor:** Korinne
**User Story:** US3
 
**Metrics:**
- Profile completion rate
- Users who complete their profile within the first session
- 7-day return rate
 
**Hypothesis:**
Users would prefer the option to skip setup and start working out immediately rather than being required to complete a guided profile setup before accessing the app.
 
**Problem:**
Forcing users through a lengthy setup may cause them to abandon the app before experiencing its core value.
 
**Experiment:**
Firebase A/B Testing will randomly split new users into two groups. Profile completion rate and 7-day return rate will be tracked to evaluate performance.
 
**Variations:**
- Variation A (Control) – Guided step-by-step profile setup before accessing the app.
- Variation B (Experiment) – Quick Start: user skips setup and is prompted to complete their profile later.
 
---
 
## Test 5: Workout Streak Visibility: Visible vs Hidden
**User Story:** US6 — Build Workout Log and Streak
 
**Metrics:**
- Engagement – workouts started per user
- Retention – return rate within 7 days
 
**Hypothesis:**
If users can clearly see their workout streak on their home screen and profile, they will be more likely to return to the app and start more workouts due to a stronger sense of progress and accountability.
 
**Problem:**
The workout streak is currently easy to overlook. Without a visible progress indicator, users lack motivation to maintain consistency, causing drop-off after initial use.
 
**Experiment:**
Firebase Remote Config will split users 50/50. Test runs until at least 100 users per group are reached.
 
Firebase events tracked: `workout_started`, `app_open`, `workout_completed`, `session_duration`
 
**Variations:**
- Variation A (Control) – Streak visible only on the profile page, no visual emphasis.
- Variation B (Experiment) – Streak prominently displayed on the home screen and profile with visual emphasis (bold text, flame icon 🔥).

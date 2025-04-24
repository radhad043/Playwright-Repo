pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'node -v'
                bat 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright install'
                bat 'npx playwright test'
            }
        }
    }
}



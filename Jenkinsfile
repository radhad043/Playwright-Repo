pipeline {
    agent any

    tools {
        nodejs "NodeJS_20" // Matches the name you configured in Jenkins
    }

    environment {
        PLAYWRIGHT_BROWSERS_PATH = './.playwright-browsers' // Optional: isolate downloaded browsers
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/<your-username>/Playwright-Repo.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            junit 'playwright-report/*.xml' // If using JUnit reporter
        }
    }
}


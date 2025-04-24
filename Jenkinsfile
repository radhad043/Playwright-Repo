pipeline {
    agent any

    tools {
        nodejs "NodeJS_18" // Matches the name you configured in Jenkins
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
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
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


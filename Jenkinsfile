pipeline {
    agent{
        docker {
            image 'mcr.microsoft.com/playwright:1.51.1'
        }
    }
    stages{
        stage('install playwright') {
            steps {
                script {
                    sh '''
                    npm i -D @playwright/test
                    npx playwright install
                    '''
                }
            }
        }
        stage('help'){
            steps {
                script {
                    sh 'npx playwright test --help'
                }
            }
        }
        stage('test') {
            steps {
                script {
                    sh '''
                    npx playwright test --list
                    npx playwright test
                    '''
                }
            }
        }
    }
}
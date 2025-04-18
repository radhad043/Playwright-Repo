
pipeline {
    agent any

    stages {
        stage('Run Tests in Docker') {
            steps {
                script {
                    docker.image('mcr.microsoft.com/playwright:1.51.1').inside {
                        sh '''
                            npm i -D @playwright/test
                            npx playwright install
                            npx playwright test --help
                            npx playwright test --list
                            npx playwright test
                        '''
                    }
                }
            }
        }
    }
}

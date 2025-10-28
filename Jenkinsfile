pipeline {
    agent any

    environment {
        APP_NAME = "MyApp"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ram-praveen-c/DEv_model_lab_1.git'
            }
        }

        stage('Build') {
            steps {
                echo "Building ${APP_NAME}..."
                // Example for Maven build:
                // sh 'mvn clean package'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Example for Python:
                // sh 'pytest tests/'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Example: sh './deploy.sh'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check logs.'
        }
    }
}

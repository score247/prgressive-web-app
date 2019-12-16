@Library("JenkinsPipelineLibrary") _

pipeline{
    agent {
        label 'slave108'
    }

    options{
        buildDiscarder(logRotator(numToKeepStr: '5'))    
        disableConcurrentBuilds()
    }

    triggers{
        pollSCM("H/30 * * * *")       
    }

    stages{
        stage('Build') {
            steps {        
                script{
                    pipelineLib.beginSonarQubeForMsBuild("score247-web-app", "Score247 / Score247 Web App", "/d:sonar.cs.opencover.reportsPaths=\"${WORKSPACE}\\CoverageReports\\*.xml\" /d:sonar.cs.vstest.reportsPaths=\"${WORKSPACE}\\TestResults\\*.trx\"")
                }
            }
        }
          
        stage("SonarQube Analysis"){
            steps{       
                script{
                    pipelineLib.endSonarQubeForMsBuild()
                }
            }
            
            post{
                always{
                    script{
                        if(manager.logContains(".*Quality gate status.*")){              
                            pipelineLib.generateSonarQubeReport("score247-web-app")
                        }
                    }

                    archiveArtifacts "*.xml,*.email"

                    step([$class: 'ACIPluginPublisher', name: '*.xml', shownOnProjectPage: false])                                       
                    
                    mstest failOnError: false
                }
            }
        }
    }
    post{
        unsuccessful{
            emailext body: '$DEFAULT_CONTENT', subject: '$DEFAULT_SUBJECT', to: 'ricky.nguyen@starixsoft.com'
        }
    }
}
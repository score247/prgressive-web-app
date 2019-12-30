@Library("JenkinsPipelineLibrary") _

pipeline{
    agent {
        label 'slaveSUN'
    }   

    options{
        buildDiscarder(logRotator(numToKeepStr: '5'))    
        disableConcurrentBuilds()
    }

    triggers{
        pollSCM("H/30 * * * *")       
    }

    stages{ 
         
        stage("Typescript Unittest & Coverage"){
            steps{       
                script{
                    pipelineLib.tsJest("")
                }
            }
        }  

        stage("SonarQube Analysis"){
            steps{       
                script{
                    pipelineLib.sonarScanner()
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
                }
            }
        }

        stage("Deploy to https://score247-web-test.nexdev.net/"){
            when {
                allOf {
                    expression { BRANCH_NAME ==~ /^(origin\/)*\d+\-Sprint\d+$/ }
                }
            }
            
            steps{
                script{
                     pipelineLib.deployByRocketor("11635", "$BRANCH_NAME", "", "", "1c36df7007d446feb2324f405afa4cab")
                }
            }
        }

        stage("Run Site Audit"){
            steps{
                 bat label: "Install Package", script: "npm install" 
                 bat label: "Run Audit", script: "npm run lighthouse:run"
                 bat label: "Check Audit Report", script: "npm run lighthouse:report"
            }

            post {
                always {
                    publishHTML (target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: '.',
                        reportFiles: 'html_audit.report.html',
                        reportName: "Lighthouse"
                    ])
                    echo "${BUILD_URL}Lighthouse/"
                }
            }
        }
    }
    post{
        unsuccessful{
            emailext body: '$DEFAULT_CONTENT', subject: '$DEFAULT_SUBJECT', to: 'ricky.nguyen@starixsoft.com,elton.ton@starixsoft.com,alvin.nguyen@starixsoft.com,tyler.dang@starixsoft.com,theresa.le@starixsoft.com,anders.le@starixsoft.com'
        }
    }
}
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
         
        stage("Typescript Unittest & Coverage"){
            steps{       
                script{
                    pipelineLib.tsJest("")
                }
            }
        }  

        stage("Run Site Audit"){
            steps{
                 bat label: "Install Package", script: "npm install" 
                 bat label: "Run Audit Json", script: "npm run lighthouse:json"
                 bat label: "Run Audit Html", script: "npm run lighthouse:html"
                 bat label: "Run Audit Report", script: "npm run lighthouse:report"
            }

            // post {
            //     always {
            //     publishHTML (target: [
            //         allowMissing: false,
            //         alwaysLinkToLastBuild: false,
            //         keepAll: true,
            //         reportDir: '.',
            //         reportFiles: 'lighthouse-report.html',
            //         reportName: "Lighthouse"
            //     ])
            //     }
            // }
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
    }
    post{
        unsuccessful{
            emailext body: '$DEFAULT_CONTENT', subject: '$DEFAULT_SUBJECT', to: 'ricky.nguyen@starixsoft.com,elton.ton@starixsoft.com,alvin.nguyen@starixsoft.com,tyler.dang@starixsoft.com,theresa.le@starixsoft.com,anders.le@starixsoft.com'
        }
    }
}
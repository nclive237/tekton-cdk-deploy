import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { RemovalPolicy } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
// import * as route53 from 'aws-cdk-lib/aws-route53';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';

export class AppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'Bucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      bucketName: 'cn237-bucket',
      enforceSSL: true,
      versioned: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // // Create an ACM certificate
    // const certificate = new acm.Certificate(this, 'MyCertificate', {
    //   domainName: 'acuityclive.com', // Replace with your domain name
    //   validation: acm.CertificateValidation.fromDns(), // Perform DNS validation
    // });

    // // Define a policy statement to allow ACM certificate validation
    // const certValidationPolicy = new iam.PolicyStatement({
    //   effect: iam.Effect.ALLOW,
    //   actions: ['acm:DescribeCertificate', 'acm:ResendValidationEmail', 'acm:GetCertificate'],
    //   resources: [certificate.certificateArn],
    // });

  }
    
}

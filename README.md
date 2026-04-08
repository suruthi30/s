Cloud-Native Data Lakehouse with Granular Access Control

Solution Overview

This project presents a cloud-native, serverless data lakehouse solution designed to process large-scale structured and unstructured datasets efficiently. The system implements a dynamic ETL pipeline that automatically selects the most suitable processing service based on the data's size and complexity.
The goal of the solution is to minimize operational cost while ensuring high performance and scalability. By leveraging serverless cloud services, the architecture eliminates infrastructure management and enables automatic scaling.

Proposed Solution

The proposed solution introduces an event-driven serverless ETL pipeline that processes data in a highly scalable and resilient manner.
When new data arrives in the storage layer, an event trigger automatically activates the processing pipeline. The system then analyzes the dataset and dynamically selects the optimal processing service such as AWS Lambda for lightweight processing or AWS Glue for large-scale distributed processing.
This adaptive mechanism ensures that each stage of the pipeline runs with the most efficient configuration.

Key Components of the Solution

1. Data Ingestion Layer
The system accepts both structured and unstructured data from multiple sources such as application logs, files, or databases. Incoming data is stored in the cloud storage layer.
2. Cloud Storage (Data Lake)
All raw data is stored in a centralized cloud storage system that acts as the data lake. The storage layer keeps both raw and processed datasets, enabling flexible data processing and analytics.
3. Event-Driven Processing
Whenever new data is uploaded, an event notification triggers the ETL workflow. This ensures that the system processes data automatically without manual intervention.
4. Self-Tuning Processing Engine
A key innovation of the solution is the self-tuning decision engine.
The engine evaluates:
Data size
Data format
Processing complexity
Based on these parameters, the system dynamically chooses the most suitable processing option.
Example decision logic:
Small datasets → processed using serverless functions for fast execution and low cost.
Large datasets → processed using distributed processing services to handle high data volume efficiently.
5. Data Transformation
During the ETL process, the system performs several transformation operations such as:
Data cleaning
Removing duplicates
Format conversion
Data aggregation
The transformed data is then stored in optimized formats to improve query performance.
6. Lakehouse Architecture
The solution follows a lakehouse model where data is organized into multiple layers:
Raw Layer – stores original data
Processed Layer – contains cleaned and transformed data
Analytics Layer – optimized for querying and analysis
This structure enables both large-scale storage and efficient analytical queries.
7. Granular Access Control
To ensure security and compliance, the solution implements fine-grained access control mechanisms. Access permissions can be configured at multiple levels such as:
User level
Role level
Dataset level
Column level
This ensures that users only access the data relevant to their roles.

Workflow of the Solution

Data is uploaded to the cloud storage layer.
An event trigger detects the new data.
The ETL pipeline is automatically activated.
The self-tuning engine analyzes the dataset.
The optimal processing service and configuration are selected.
Data transformation and cleaning are performed.
Processed data is stored in the lakehouse for analytics and querying.

Benefits of the Solution

Serverless architecture eliminates infrastructure management.
Automatic scaling supports processing of terabytes of data.
Cost optimization through intelligent service selection.
Event-driven automation enables real-time data processing.
Secure data access using granular access control.

Conclusion

The proposed solution demonstrates how a cloud-native data lakehouse architecture combined with a self-optimizing ETL pipeline can efficiently process large-scale datasets. By dynamically selecting the most suitable cloud services and configurations, the system achieves a balance between performance, scalability, and cost efficiency.

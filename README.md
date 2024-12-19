### Dummy API

> API for Learning Management System (LMS)

##### Key Features:

| **Feature**         | **Description**                                                                                   | **Additional Notes**                                                                 |
|----------------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| **Course Management**| Create, read, update, and delete courses with metadata like category, description, and pricing.   | Metadata includes details like category, pricing, and description.                 |
|                      | Access course details using `course_id`.                                                        | Enables efficient querying of course data by unique identifier.                    |
| **User Management**  | CRUD operations for managing users with roles such as `students` and `lecturers`.                | Role-specific functionality can be added in future iterations.                     |
|                      | Access user details using `user_id`.                                                            | Helps retrieve specific user information efficiently.                              |
|                      | Assign courses to users as referenced documents in the Course Collection.                       | If a course is already assigned, the existing course will be removed and replaced. | 

> JWT authentication will be introduced in version 2 (V2).
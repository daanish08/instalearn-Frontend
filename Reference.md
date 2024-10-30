
Admin URLs:
---------
/admin/courses/new (POST to create)
/admin/courses/{courseId}/edit (PUT to update)
/admin/courses/{courseId}/delete (DELETE)
/admin/courses/{courseId}/approve (PUT, userId might be in request body)
/admin/courses/{courseId}/attachments (POST to upload) - More RESTful way to attach documents.

User Course URLs:
-----------------
/courses (GET to list available courses)
/courses/{courseId} (GET to view course details)
/courses/{courseId}/enroll (POST to subscribe)
/my-courses (GET to list purchased courses)
/my-courses/{courseId}/status (GET purchase status)
/my-courses/{courseId}/certificate (GET to download certificate)

Authentication urls:
--------------
/login (or /admin/login, /api/v1/auth/login)
/logout (or /api/v1/auth/logout)
/profile (or /api/v1/users/me)

Tasks:
----
1.
2.
3.
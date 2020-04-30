// POST localhost:8080/api/auth/signup
// Pilih Tab Body => raw | text = json
{
    "name": "Ghani",
    "username": "ghaninf",
    "email": "ghaninf@gmail.com",
    "password": "asdasd123",
    "roles": ["user", "admin"]
}

// POST localhost:8080/api/auth/signin
// Pilih Tab Body => raw | text = json
{
    "username": "ghaninf",
    "password": "asdasd123"
}

// Copy kode Tokennya
// Pilih Tab Authorization | Type = Bearer Token
// Masukan Tokennya
// GET localhost:8080/api/users
// GET localhost:8080/api/test/user
// GET localhost:8080/api/test/pm
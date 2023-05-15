<?php

namespace App\Models;

use CodeIgniter\Model;

class LoginModel extends Model
{

    public function getLoginData($email, $password)
    {
        $db = db_connect();
        // $query = "SELECT * FROM mst_user WHERE mus_email = '" . $email . "' AND mus_password = '" . $password . "' ";
        $query = "CALL getUserLogin('" . $email . "','" . $password . "');";
        $execQuery = $db->query($query);
        $db->close();

        return $execQuery->getResult();
    }
}

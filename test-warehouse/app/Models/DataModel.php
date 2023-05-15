<?php

namespace App\Models;

use CodeIgniter\Model;

class DataModel extends Model
{

    public function getAllVehicle()
    {
        $db = db_connect();
        // $query = "SELECT * FROM mst_user WHERE mus_email = '" . $email . "' AND mus_password = '" . $password . "' ";
        $query = "CALL getAllKendaraan();";
        $execQuery = $db->query($query);
        $db->close();

        return $execQuery->getResult();
    }
}

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

    public function getAllVehicleById($id)
    {
        $db = db_connect();
        $query = "SELECT * FROM mst_list_vehicle WHERE mlv_id = '" . $id . "' ";
        // $query = "CALL getAllKendaraan();";
        $execQuery = $db->query($query);
        $db->close();

        return $execQuery->getResult();
    }

    public function getAllUser($username)
    {
        // $url = "localhost:8888/user/" . $username;
        $url = "http://localhost:8888/user/" . $username;
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }
}

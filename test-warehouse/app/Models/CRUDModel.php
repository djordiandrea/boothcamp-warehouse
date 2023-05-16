<?php

namespace App\Models;

use CodeIgniter\Model;

class CRUDModel extends Model
{

    public function addKendaraan($vName, $vCode, $vBrand, $vModel, $vNumber, $vLongRun, $vBuyingDate, $vPicture)
    {
        $db = db_connect();
        // $query = "SELECT * FROM mst_user WHERE mus_email = '" . $email . "' AND mus_password = '" . $password . "' ";
        $query = "CALL 	SP_addKendaraan('" . $vName . "','" . $vCode . "', '" . $vBrand . "','" . $vModel . "',
        '" . $vNumber . "','" . $vLongRun . "','" . $vBuyingDate . "','" . $vPicture . "');";
        $execQuery = $db->query($query);
        $db->close();


        return $execQuery->resultID;
    }
}

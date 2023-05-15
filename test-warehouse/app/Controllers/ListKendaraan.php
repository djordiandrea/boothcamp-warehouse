<?php

namespace App\Controllers;

use App\Models\DataModel;

class ListKendaraan extends BaseController
{
    public function index()
    {
        // $header['title'] = 'List Kendaraan';
        // $header['active'] = 'active';
        // $header['path'] = 'list-kendaraan';

        $header = array(
            'title' => 'List Kendaraan',
            'active' => 'active',
            'path' => 'list-kendaraan'
        );

        //tembak dl databasenya kendaraan
        $dataModel = new DataModel();
        $result = $dataModel->getAllVehicle();

        $index['list_kendaraan'] = $result;

        echo view('template/header', $header);
        echo view('list-kendaraan/index', $index);
        echo view('template/footer');
    }
}

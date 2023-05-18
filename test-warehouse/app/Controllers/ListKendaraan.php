<?php

namespace App\Controllers;

use App\Models\CRUDModel;
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

        $footer = array(
            'path' => 'list-kendaraan'
        );

        //tembak dl databasenya kendaraan
        $dataModel = new DataModel();
        $result = $dataModel->getAllVehicle();

        $index['list_kendaraan'] = $result;

        echo view('template/header', $header);
        echo view('list-kendaraan/index', $index);
        echo view('template/footer', $footer);
    }

    public function readKendaraan()
    {
        $dataModel = new DataModel();
        $result = $dataModel->getAllVehicle();

        return json_encode($result);
    }

    public function readKendaraanById()
    {
        $id = $this->request->getGet('id');

        $dataModel = new DataModel();
        $result = $dataModel->getAllVehicleById($id);

        return json_encode($result);
    }

    public function deleteKendaraan()
    {
        $id = $this->request->getGet('id');

        $dataModel = new DataModel();
        $result = $dataModel->getAllVehicleById($id);

        return json_encode($result);
    }

    public function addKendaraan()
    {
        $vName = $this->request->getPost('vName');
        $vCode = $this->request->getPost('vCode');
        $vBrand = $this->request->getPost('vBrand');
        $vModel = $this->request->getPost('vModel');
        $vNumber = $this->request->getPost('vNumber');
        $vLongRun = $this->request->getPost('vLongRun');
        $vBuyingDate = $this->request->getPost('vBuyingDate');
        $vPicture = '';

        $CRUDModel = new CRUDModel();
        $result = $CRUDModel->addKendaraan(
            $vName,
            $vCode,
            $vBrand,
            $vModel,
            $vNumber,
            $vLongRun,
            $vBuyingDate,
            $vPicture
        );

        $data = array();

        if ($result == true) {
            $data = array(
                'result' => true,
                'status' => 200,
                'message' => 'berhasil',
                'url' => '/list-kendaraan'
            );
        } else {
            $data = array(
                'result' => false,
                'status' => 500,
                'message' => 'gagal',
                'url' => ''
            );
        }

        return json_encode($data);
    }

    public function getAllUser()
    {
        $username = $this->request->getPost("username");

        $dataModel = new DataModel();
        $result = $dataModel->getAllUser($username);

        return json_encode($result, true);
    }
}

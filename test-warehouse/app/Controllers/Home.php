<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        // $header['title'] = 'Dashboard';
        // $header['active'] = 'active';
        // $header['path'] = 'home';

        $header = array(
            'title' => 'Dashboard',
            'active' => 'active',
            'path' => 'home'
        );

        echo view('template/header', $header);
        echo view('Home/index');
        echo view('template/footer');
    }
}

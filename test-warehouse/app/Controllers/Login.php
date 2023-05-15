<?php

namespace App\Controllers;

use App\Models\LoginModel;

class Login extends BaseController
{
    public function index()
    {
        return view('login/index');
    }

    public function submitLogin()
    {

        $email = $this->request->getPost('email');
        $password = $this->request->getPost('password');

        //model
        $loginModel = new LoginModel();
        $result = $loginModel->getLoginData($email, $password);

        if (sizeof($result) > 0) {
            $data_login = [
                'logged_in' => true,
                'username' => $result[0]->mus_username,
                'fullname' => $result[0]->mus_fullname,
                'url' => '/home'
            ];
        } else {
            $data_login = [
                'logged_in' => false,
                'url' => '/login'
            ];
        }

        return json_encode($data_login);
    }
}

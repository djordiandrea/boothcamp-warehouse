<?php

namespace App\Controllers;

class Login extends BaseController
{
    public function index()
    {
        return view('login/index');
    }

    public function submitLogin()
    {
        //email & password -> 
        // var data = {
        //     email: email, //(key, value) = (key= "yg mau dikirim ke controller", value="yg didapat dari variable jsnya")
        //     password: pw
        // }

        $email = $this->request->getPost('email');
        $password = $this->request->getPost('password');


        // //ini nanti kita taro di model
        $db = db_connect();
        // $query = "SELECT * FROM mst_user WHERE mus_email = '" . $email . "' AND mus_password = '" . $password . "' ";
        $query = "CALL getUserLogin('" . $email . "','" . $password . "');";
        $execQuery = $db->query($query);
        $db->close();
        // //-------------------------------

        $result = $execQuery->getResult();

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

<?php

class person{
    public $nama;
    public $alamat;
    public $jurusan;

    public function _construct($nama, $alamat, $jurusan){
        $this->nama = $nama;
        $this->nama = $alamat;
        $this->nama = $jurusan;
    }
    public function cetak(){
        echo 'Nama',$this->nama;
        echo 'Alamat',$this->alamat;
        echo 'Jurusan',$this->jurusan;
    }
}




?>
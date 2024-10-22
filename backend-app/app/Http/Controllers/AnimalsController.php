<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller
{
    private $animals = ['kucing', 'ayam', 'ikan'];

    public function index()
    {
        foreach ($this->animals as $index => $animal) {
            echo "Index: $index, Hewan: $animal\n";
        }
    }

    public function store($namaHewanBaru)
    {
        array_push($this->animals, $namaHewanBaru);

        return $this->animals;
    }

    public function update($id, $namaBaru)
    {
        if (isset($this->animals[$id])) {
            $this->animals[$id] = $namaBaru;

            return $this->animals;
        } else {
            return "Hewan tidak ditemukan.";
        }
    }

    public function destroy($id)
    {
        if (isset($this->animals[$id])) {
            unset($this->animals[$id]);

            $this->animals = array_values($this->animals);

            return $this->animals;
        } else {
            return "Hewan tidak ditemukan.";
        }
    }
}
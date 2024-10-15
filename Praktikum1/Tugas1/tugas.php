<?php

class Animal {

    public $animals;

    public function __construct($initialAnimals = []) {
        $this->animals = $initialAnimals;
    }

    public function index() {
        return $this->animals;
    }

    public function store($animal) {
        $this->animals[] = $animal;
        return "Hewan '$animal' berhasil ditambahkan.";
    }

    public function update($index, $newAnimal) {
        if (isset($this->animals[$index])) {
            $oldAnimal = $this->animals[$index];
            $this->animals[$index] = $newAnimal;
            return "Hewan '$oldAnimal' berhasil diperbarui menjadi '$newAnimal'.";
        } else {
            return "Indeks tidak ditemukan.";
        }
    }

    public function destroy($index) {
        if (isset($this->animals[$index])) {
            $animal = $this->animals[$index];
            unset($this->animals[$index]);
            $this->animals = array_values($this->animals);
            return "Hewan '$animal' berhasil dihapus.";
        } else {
            return "Indeks tidak ditemukan.";
        }
    }
}

$animalList = new Animal(['Kucing', 'Anjing', 'Kelinci']);


print_r($animalList->index());
echo $animalList->store('Hamster') . "\n";
echo $animalList->update(1, 'Sapi') . "\n";
echo $animalList->destroy(0) . "\n";

print_r($animalList->index());

?>

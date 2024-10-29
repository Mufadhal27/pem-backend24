<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    //
    public function index(){
        // melihat data
        // query builder student = DB::table('student')->get();
        $student = Student::all(); // menggunakan eloquent
        $data = [
            'message' => 'Get all students',
            'data' => $student
        ];

        // mengirim data (json dan kode 200)
        return response()->json($data, 200);
    }

    public function store(Request $request) {
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];
        $student = Student::create($input);
        $data = [
            'message' => 'Data berhasil ditambah',
            'data' => $student
        ];
        return response()->json($data, 200);
    }

    public function update(Request $request, $id) {
        $student = Student::find($id);

        if ($student) {
            $student->update([
                'nama' => $request->nama,
                'nim' => $request->nim,
                'email' => $request->email,
                'jurusan' => $request->jurusan
            ]);

            $data = [
                'message' => 'Data berhasil diperbarui',
                'data' => $student
            ];
            return response()->json($data, 200);
        } else {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
    }

    public function delete($id) {
        $student = Student::find($id);

        if ($student) {
            $student->delete();

            return response()->json(['message' => 'Data berhasil dihapus'], 200);
        } else {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
    }
}


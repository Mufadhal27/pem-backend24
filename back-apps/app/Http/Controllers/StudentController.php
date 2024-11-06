<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
   public function index()
    {
        $students = Student::all();

        if ($students->isEmpty()) {
            return response()->json([
                'message' => 'Tidak ada data mahasiswa',
                'data' => []
            ], 404);
        }

        $data = [
            'message' => 'Data semua mahasiswa',
            'data' => $students
        ];

        return response()->json($data, 200);
    }


    public function store(Request $request) {
        try {
            // Validasi input
            $input = $request->validate([
                'nama' => 'required|string|max:255',
                'nim' => 'required|numeric',
                'email' => 'required|email|max:255',
                'jurusan' => 'required|string|max:255',
            ]);
    
            $student = Student::create($input);
    
            $data = [
                'message' => 'Siswa berhasil dibuat',
                'data' => [$student],
            ];
    
            return response()->json($data, 201);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'Validasi gagal',
                'errors' => $e->validator->errors(),
            ], 422); 
            
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Gagal menambahkan siswa',
                'error' => $e->getMessage(),
            ], 500);
    }
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

    public function show($id) {
        $student = Student::find($id);

        if ($student) {
            $data = [
                'message' => 'Get detail student',
                'data' => $student,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found',
            ];

            return response()->json($data, 404);
        }
    }
}


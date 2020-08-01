import React from "react";
import { Link } from "react-router-dom";
export default function Register() {
    return (
      <header className="spicing-sm header-bg">
				<div className="text-center">
					<Link to="/tokopedia" className="btn btn-disabled">
						<span className="text-judul">tokopedia</span>
					</Link>
				</div>
        <div className="container">
          <form className="mt-4">
            <div align="center" class="p">
              <h3>
                Daftar Sekarang
              </h3>
              <p>Sudah punya akun Tokopedia?<a href="#" class="tokopedia.com">Masuk</a></p>
            </div>
            <div align="center" class="button">
              <button type="submit" class="btn btn-primary"><i class="fa fa-facebook" aria-hidden="true"></i>Facebook</button>
              <button type="submit" class="btn btn-primary"><i class="fa fa-google" aria-hidden="true"></i>Google</button>
            </div>
            <div align="center" class="p">
              <p>atau daftar dengan</p>
            </div>
            <div align="center" class="form-group">
              <label for="exampleInputEmail1">Nomor Ponsel atau Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" style={{height: 50, width: 250}}/>
              <small id="emailHelp" class="form-text text-muted">contoh: email@tokopedia.com</small>
            </div>
            <div align="center" class="button-daftar">
            <button type="button" class="btn btn-primary" style={{height: 50, width: 250}}>Daftar</button>
            </div>
            <div align="center" class="p">
              <p>Dengan mendaftar, saya menyetujui</p>
              <p><a href="#" class="tokopedia.com">Syarat dan Ketentuan</a> serta <a href="#" class="tokopedia.com">Kebijakan Privasi.</a></p>
            </div>
          </form>
        </div>
        </header>
      );
}
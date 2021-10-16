import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-novo-game',
  templateUrl: './novo-game.component.html',
  styleUrls: ['./novo-game.component.css']
})
export class NovoGameComponent implements OnInit {

  formularioGame!: FormGroup;
  file !: File;
  preview!: string;
  percentualConcluido = 0;

  constructor(private gamesService: GamesService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formularioGame = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload() {
    const allowComments = this.formularioGame.get('allowComments')?.value ?? false;
    const description = this.formularioGame.get('description')?.value ?? '';
    this.gamesService.upload(description, allowComments, this.file).pipe(
      finalize(() => this.router.navigate(['games']))
    ).subscribe((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.UploadProgress) {
        const total = event.total ?? 1;
        this.percentualConcluido = Math.round(100 * (event.loaded / total));
      }
    }, (error) => console.log(error))
  }

  gravaArquivo(arquivo: any): void {
    const [file] = arquivo?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}

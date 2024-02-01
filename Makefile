git-%:
	git add -A
	git commit -m "$(@:git-%=%)"
	git push origin main